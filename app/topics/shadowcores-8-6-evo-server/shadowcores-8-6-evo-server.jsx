import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-evo-server');
}

export default function Shadowcores86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-evo-server" />;
}
