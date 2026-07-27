import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-unline-server');
}

export default function EvoUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="evo-unline-server" />;
}
