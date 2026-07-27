import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-canada');
}

export default function TibiaraFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-canada" />;
}
