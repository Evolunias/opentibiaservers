import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-register');
}

export default function ActiveEternalOdysseyRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-register" />;
}
