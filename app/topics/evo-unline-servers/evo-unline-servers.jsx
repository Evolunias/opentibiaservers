import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-unline-servers');
}

export default function EvoUnlineServersKeywordPage() {
  return <StaticKeywordPage slug="evo-unline-servers" />;
}
