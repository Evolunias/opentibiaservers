import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-official');
}

export default function HighrateRealeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-official" />;
}
