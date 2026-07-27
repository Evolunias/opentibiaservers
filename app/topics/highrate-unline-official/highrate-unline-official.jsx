import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-official');
}

export default function HighrateUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-official" />;
}
