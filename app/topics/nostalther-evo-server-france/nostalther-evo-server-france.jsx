import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-france');
}

export default function NostaltherEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-france" />;
}
