import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-official');
}

export default function ActiveCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-official" />;
}
