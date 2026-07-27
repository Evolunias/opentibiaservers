import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-mist-of-death-login');
}

export default function OfficialMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="official-mist-of-death-login" />;
}
