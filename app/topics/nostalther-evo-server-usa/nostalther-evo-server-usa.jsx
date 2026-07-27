import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-usa');
}

export default function NostaltherEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-usa" />;
}
