import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-brazil');
}

export default function MyaacBrazilKeywordPage() {
  return <StaticKeywordPage slug="myaac-brazil" />;
}
