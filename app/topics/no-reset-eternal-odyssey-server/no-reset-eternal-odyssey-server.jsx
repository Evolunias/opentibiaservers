import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-server');
}

export default function NoResetEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-server" />;
}
