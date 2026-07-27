import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-chile-server');
}

export default function AlasteraChileServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-chile-server" />;
}
