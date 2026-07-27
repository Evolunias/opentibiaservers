import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-official');
}

export default function HighrateElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-official" />;
}
