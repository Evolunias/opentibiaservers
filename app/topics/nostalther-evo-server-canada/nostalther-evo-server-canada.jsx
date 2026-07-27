import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-canada');
}

export default function NostaltherEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-canada" />;
}
