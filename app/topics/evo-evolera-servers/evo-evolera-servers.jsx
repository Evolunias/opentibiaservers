import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-evolera-servers');
}

export default function EvoEvoleraServersKeywordPage() {
  return <StaticKeywordPage slug="evo-evolera-servers" />;
}
