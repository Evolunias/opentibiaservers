import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-ot');
}

export default function NoResetMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-ot" />;
}
