import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-official');
}

export default function HighrateImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-official" />;
}
