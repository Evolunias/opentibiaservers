import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-register');
}

export default function OfficialEternalOdysseyRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-register" />;
}
