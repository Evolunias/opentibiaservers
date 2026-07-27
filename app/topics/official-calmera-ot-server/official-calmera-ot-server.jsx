import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-server');
}

export default function OfficialCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-server" />;
}
