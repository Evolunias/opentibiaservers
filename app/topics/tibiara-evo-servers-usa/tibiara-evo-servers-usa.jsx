import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-servers-usa');
}

export default function TibiaraEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-servers-usa" />;
}
