import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-4-evo-server');
}

export default function Unline84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-4-evo-server" />;
}
