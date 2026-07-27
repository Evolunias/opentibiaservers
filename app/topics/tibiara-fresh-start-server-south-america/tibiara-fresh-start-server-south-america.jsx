import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-south-america');
}

export default function TibiaraFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-south-america" />;
}
