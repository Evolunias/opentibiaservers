import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-ot-server');
}

export default function CurrentAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-ot-server" />;
}
