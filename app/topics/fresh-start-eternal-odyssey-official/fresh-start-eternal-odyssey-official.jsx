import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-official');
}

export default function FreshStartEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-official" />;
}
