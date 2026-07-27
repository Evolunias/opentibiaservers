import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-ot-server');
}

export default function OfficialXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-ot-server" />;
}
