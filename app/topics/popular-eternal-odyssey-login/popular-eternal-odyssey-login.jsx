import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-login');
}

export default function PopularEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-login" />;
}
