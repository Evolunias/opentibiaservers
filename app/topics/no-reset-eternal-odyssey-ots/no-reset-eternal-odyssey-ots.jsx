import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-ots');
}

export default function NoResetEternalOdysseyOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-ots" />;
}
