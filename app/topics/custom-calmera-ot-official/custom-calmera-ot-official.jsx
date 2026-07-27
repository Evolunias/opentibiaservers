import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-official');
}

export default function CustomCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-official" />;
}
