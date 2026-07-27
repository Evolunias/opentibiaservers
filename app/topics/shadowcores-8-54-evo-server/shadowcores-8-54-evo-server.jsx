import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-54-evo-server');
}

export default function Shadowcores854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-54-evo-server" />;
}
