import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-ot-server');
}

export default function TopXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-ot-server" />;
}
