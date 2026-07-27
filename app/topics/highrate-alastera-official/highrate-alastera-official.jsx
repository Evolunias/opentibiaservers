import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-official');
}

export default function HighrateAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-official" />;
}
