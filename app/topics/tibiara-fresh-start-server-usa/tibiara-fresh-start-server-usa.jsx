import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-fresh-start-server-usa');
}

export default function TibiaraFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-fresh-start-server-usa" />;
}
