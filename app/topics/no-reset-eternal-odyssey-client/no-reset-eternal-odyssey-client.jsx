import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-client');
}

export default function NoResetEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-client" />;
}
