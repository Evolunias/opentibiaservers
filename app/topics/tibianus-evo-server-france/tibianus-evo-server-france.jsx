import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-france');
}

export default function TibianusEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-france" />;
}
