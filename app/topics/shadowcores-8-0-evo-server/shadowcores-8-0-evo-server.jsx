import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-0-evo-server');
}

export default function Shadowcores80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-0-evo-server" />;
}
