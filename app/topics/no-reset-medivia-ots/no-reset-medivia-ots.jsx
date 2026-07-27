import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-ots');
}

export default function NoResetMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-ots" />;
}
