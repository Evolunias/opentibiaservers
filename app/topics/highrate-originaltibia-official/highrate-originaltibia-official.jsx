import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-official');
}

export default function HighrateOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-official" />;
}
