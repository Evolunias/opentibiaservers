import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-server');
}

export default function OfficialEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-server" />;
}
