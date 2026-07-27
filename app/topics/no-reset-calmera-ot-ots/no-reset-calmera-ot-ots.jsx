import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-ots');
}

export default function NoResetCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-ots" />;
}
