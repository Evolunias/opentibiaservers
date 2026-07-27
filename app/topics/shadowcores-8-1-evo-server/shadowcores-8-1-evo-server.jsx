import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-1-evo-server');
}

export default function Shadowcores81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-1-evo-server" />;
}
