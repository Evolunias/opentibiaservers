import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-4-evo-server');
}

export default function Unline74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-4-evo-server" />;
}
