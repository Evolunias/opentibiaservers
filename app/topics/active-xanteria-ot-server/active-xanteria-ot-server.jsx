import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-ot-server');
}

export default function ActiveXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-ot-server" />;
}
