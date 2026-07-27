import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-fun-server');
}

export default function AlasteraFunServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-fun-server" />;
}
