import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-ots');
}

export default function OfficialCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-ots" />;
}
