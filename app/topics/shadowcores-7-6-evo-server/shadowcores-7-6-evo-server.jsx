import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-evo-server');
}

export default function Shadowcores76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-evo-server" />;
}
