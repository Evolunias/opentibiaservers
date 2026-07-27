import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-register');
}

export default function TopEternalOdysseyRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-register" />;
}
