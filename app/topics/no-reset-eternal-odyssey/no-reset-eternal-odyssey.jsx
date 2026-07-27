import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey');
}

export default function NoResetEternalOdysseyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey" />;
}
