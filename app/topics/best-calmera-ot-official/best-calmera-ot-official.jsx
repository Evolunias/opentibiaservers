import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-official');
}

export default function BestCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-official" />;
}
