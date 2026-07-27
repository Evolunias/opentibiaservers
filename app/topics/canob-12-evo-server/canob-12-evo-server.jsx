import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-evo-server');
}

export default function Canob12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-evo-server" />;
}
