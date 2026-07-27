import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-official');
}

export default function HighrateMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-official" />;
}
