import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibianus-server');
}

export default function EvoTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="evo-tibianus-server" />;
}
