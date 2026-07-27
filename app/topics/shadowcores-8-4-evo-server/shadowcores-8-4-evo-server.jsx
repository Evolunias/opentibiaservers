import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-evo-server');
}

export default function Shadowcores84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-evo-server" />;
}
