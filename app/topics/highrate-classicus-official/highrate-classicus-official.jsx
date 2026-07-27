import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-official');
}

export default function HighrateClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-official" />;
}
