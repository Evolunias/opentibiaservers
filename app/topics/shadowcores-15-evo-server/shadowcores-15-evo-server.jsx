import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-evo-server');
}

export default function Shadowcores15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-evo-server" />;
}
