import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-germany');
}

export default function NostaltherEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-germany" />;
}
