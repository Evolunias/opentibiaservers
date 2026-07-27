import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-register');
}

export default function PopularEternalOdysseyRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-register" />;
}
