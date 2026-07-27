import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-ot');
}

export default function NoResetEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-ot" />;
}
