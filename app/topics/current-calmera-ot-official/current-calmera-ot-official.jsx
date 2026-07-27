import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-official');
}

export default function CurrentCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-official" />;
}
