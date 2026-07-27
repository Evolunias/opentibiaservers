import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-evo-server');
}

export default function Unline96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-evo-server" />;
}
