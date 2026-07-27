import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-website');
}

export default function OfficialCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-website" />;
}
