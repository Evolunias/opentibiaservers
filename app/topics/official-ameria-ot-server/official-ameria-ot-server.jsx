import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-ot-server');
}

export default function OfficialAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-ot-server" />;
}
