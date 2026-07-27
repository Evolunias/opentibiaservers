import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-ot-server');
}

export default function ActiveSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-ot-server" />;
}
