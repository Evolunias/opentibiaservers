import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-official');
}

export default function HighrateYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-official" />;
}
