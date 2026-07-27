import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-aurera-global-servers');
}

export default function EvoAureraGlobalServersKeywordPage() {
  return <StaticKeywordPage slug="evo-aurera-global-servers" />;
}
