import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-72-evo-server');
}

export default function Shadowcores772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-72-evo-server" />;
}
