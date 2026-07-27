import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-official');
}

export default function OfficialCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-official" />;
}
