import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-official');
}

export default function HighrateThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-official" />;
}
