import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-france');
}

export default function TibijkaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-france" />;
}
