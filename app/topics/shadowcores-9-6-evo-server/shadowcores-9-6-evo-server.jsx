import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-evo-server');
}

export default function Shadowcores96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-evo-server" />;
}
