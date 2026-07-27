import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-official');
}

export default function HighrateAmeriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-official" />;
}
