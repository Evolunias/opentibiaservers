import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-ot-server');
}

export default function CurrentXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-ot-server" />;
}
