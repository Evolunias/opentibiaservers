import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-official');
}

export default function CurrentEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-official" />;
}
