import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-south-america');
}

export default function ClassicusFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-south-america" />;
}
