import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac');
}

export default function MyaacKeywordPage() {
  return <StaticKeywordPage slug="myaac" />;
}
