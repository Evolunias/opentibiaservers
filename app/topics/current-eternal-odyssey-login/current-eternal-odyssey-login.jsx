import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-login');
}

export default function CurrentEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-login" />;
}
