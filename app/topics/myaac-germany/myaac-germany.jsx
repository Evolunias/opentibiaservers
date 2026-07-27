import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-germany');
}

export default function MyaacGermanyKeywordPage() {
  return <StaticKeywordPage slug="myaac-germany" />;
}
