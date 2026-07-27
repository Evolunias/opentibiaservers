import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibianus-servers');
}

export default function EvoTibianusServersKeywordPage() {
  return <StaticKeywordPage slug="evo-tibianus-servers" />;
}
