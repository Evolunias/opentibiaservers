import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-client');
}

export default function OfficialEternalOdysseyClientKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-client" />;
}
