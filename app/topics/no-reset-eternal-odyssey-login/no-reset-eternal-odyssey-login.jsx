import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-login');
}

export default function NoResetEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-login" />;
}
