import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-official');
}

export default function CalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-official" />;
}
