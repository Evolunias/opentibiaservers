import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-ot-server');
}

export default function ActiveAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-ot-server" />;
}
