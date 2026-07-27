import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-ots');
}

export default function NewCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-ots" />;
}
