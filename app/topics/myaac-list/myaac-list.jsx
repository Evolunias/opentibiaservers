import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-list');
}

export default function MyaacListKeywordPage() {
  return <StaticKeywordPage slug="myaac-list" />;
}
