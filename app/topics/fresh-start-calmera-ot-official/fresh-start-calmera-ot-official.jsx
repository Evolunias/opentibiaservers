import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-official');
}

export default function FreshStartCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-official" />;
}
