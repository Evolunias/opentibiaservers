import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-evo-server');
}

export default function Unline13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-evo-server" />;
}
