import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-official');
}

export default function HighrateOlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-official" />;
}
