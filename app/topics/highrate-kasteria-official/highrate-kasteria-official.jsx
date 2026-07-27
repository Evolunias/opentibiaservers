import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-official');
}

export default function HighrateKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-official" />;
}
