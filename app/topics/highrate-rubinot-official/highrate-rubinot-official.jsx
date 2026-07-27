import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-official');
}

export default function HighrateRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-official" />;
}
