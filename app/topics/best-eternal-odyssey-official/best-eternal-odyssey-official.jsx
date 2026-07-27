import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-official');
}

export default function BestEternalOdysseyOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-official" />;
}
