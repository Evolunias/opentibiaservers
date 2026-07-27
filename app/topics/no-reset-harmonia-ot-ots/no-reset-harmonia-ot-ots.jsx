import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-ots');
}

export default function NoResetHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-ots" />;
}
