import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-ot-server');
}

export default function TopSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-ot-server" />;
}
