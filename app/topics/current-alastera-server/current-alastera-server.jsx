import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-server');
}

export default function CurrentAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-server" />;
}
