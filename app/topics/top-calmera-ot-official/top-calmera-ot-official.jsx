import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-official');
}

export default function TopCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-official" />;
}
