import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-ot');
}

export default function OfficialCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-ot" />;
}
