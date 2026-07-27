import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-official');
}

export default function LowrateEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-official" />;
}
