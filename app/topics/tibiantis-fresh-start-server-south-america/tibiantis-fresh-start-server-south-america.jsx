import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-south-america');
}

export default function TibiantisFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-south-america" />;
}
