import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-register');
}

export default function NewEternalOdysseyRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-register" />;
}
