import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-login');
}

export default function BestEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-login" />;
}
