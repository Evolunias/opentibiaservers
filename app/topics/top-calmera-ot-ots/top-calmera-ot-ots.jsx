import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-ots');
}

export default function TopCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-ots" />;
}
