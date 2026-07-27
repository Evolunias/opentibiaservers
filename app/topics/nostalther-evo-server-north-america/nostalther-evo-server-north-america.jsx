import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-north-america');
}

export default function NostaltherEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-north-america" />;
}
