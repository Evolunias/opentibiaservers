import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-official');
}

export default function LowrateNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-official" />;
}
