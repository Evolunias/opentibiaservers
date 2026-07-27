import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-login');
}

export default function TopEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-login" />;
}
