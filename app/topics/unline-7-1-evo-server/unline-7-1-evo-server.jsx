import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-evo-server');
}

export default function Unline71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-evo-server" />;
}
