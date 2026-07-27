import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-evo-server');
}

export default function Canob100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-evo-server" />;
}
