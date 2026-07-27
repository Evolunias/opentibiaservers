import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-alastera-servers');
}

export default function EvoAlasteraServersKeywordPage() {
  return <StaticKeywordPage slug="evo-alastera-servers" />;
}
