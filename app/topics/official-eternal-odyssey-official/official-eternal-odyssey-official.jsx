import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-official');
}

export default function OfficialEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-official" />;
}
