import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-france');
}

export default function OriginaltibiaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-france" />;
}
