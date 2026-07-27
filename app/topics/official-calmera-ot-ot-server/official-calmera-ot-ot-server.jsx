import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-ot-server');
}

export default function OfficialCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-ot-server" />;
}
