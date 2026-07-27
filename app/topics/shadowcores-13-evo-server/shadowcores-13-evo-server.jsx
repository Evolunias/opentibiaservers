import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-evo-server');
}

export default function Shadowcores13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-evo-server" />;
}
