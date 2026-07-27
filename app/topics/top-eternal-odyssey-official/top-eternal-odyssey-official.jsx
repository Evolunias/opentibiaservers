import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-official');
}

export default function TopEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-official" />;
}
