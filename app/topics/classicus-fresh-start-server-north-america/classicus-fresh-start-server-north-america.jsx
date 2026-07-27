import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-north-america');
}

export default function ClassicusFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-north-america" />;
}
