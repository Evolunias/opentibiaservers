import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-ot-server');
}

export default function CustomAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-ot-server" />;
}
