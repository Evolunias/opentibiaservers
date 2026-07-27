import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-alastera-server');
}

export default function EvoAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="evo-alastera-server" />;
}
