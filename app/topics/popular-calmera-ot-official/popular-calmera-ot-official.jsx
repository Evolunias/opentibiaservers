import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-official');
}

export default function PopularCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-official" />;
}
