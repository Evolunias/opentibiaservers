import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-north-america');
}

export default function TibiaraFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-north-america" />;
}
