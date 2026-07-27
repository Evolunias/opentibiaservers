import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-chile-servers');
}

export default function AlasteraChileServersKeywordPage() {
  return <StaticKeywordPage slug="alastera-chile-servers" />;
}
