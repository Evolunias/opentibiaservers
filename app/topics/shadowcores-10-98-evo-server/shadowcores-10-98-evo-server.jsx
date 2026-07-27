import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-98-evo-server');
}

export default function Shadowcores1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-98-evo-server" />;
}
