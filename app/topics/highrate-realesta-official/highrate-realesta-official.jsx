import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-official');
}

export default function HighrateRealestaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-official" />;
}
