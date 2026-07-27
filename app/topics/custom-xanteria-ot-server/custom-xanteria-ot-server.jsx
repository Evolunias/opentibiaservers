import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-ot-server');
}

export default function CustomXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-ot-server" />;
}
