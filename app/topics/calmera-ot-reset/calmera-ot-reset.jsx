import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-reset');
}

export default function CalmeraOtResetKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-reset" />;
}
