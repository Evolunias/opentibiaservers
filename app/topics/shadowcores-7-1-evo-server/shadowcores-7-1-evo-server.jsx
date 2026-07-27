import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-evo-server');
}

export default function Shadowcores71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-evo-server" />;
}
