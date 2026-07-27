import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-official');
}

export default function HighrateNostaltherOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-official" />;
}
