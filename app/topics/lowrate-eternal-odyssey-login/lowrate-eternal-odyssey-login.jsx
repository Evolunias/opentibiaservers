import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-login');
}

export default function LowrateEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-login" />;
}
