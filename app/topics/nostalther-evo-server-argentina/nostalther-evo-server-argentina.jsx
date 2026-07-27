import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-argentina');
}

export default function NostaltherEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-argentina" />;
}
