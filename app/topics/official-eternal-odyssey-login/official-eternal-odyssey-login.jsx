import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-login');
}

export default function OfficialEternalOdysseyLoginKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-login" />;
}
