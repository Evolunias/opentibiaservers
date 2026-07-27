import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-ots');
}

export default function ActiveCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-ots" />;
}
