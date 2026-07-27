import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-register');
}

export default function CustomEternalOdysseyRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-register" />;
}
