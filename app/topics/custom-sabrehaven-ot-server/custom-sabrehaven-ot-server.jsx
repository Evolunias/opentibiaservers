import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-ot-server');
}

export default function CustomSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-ot-server" />;
}
