import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-official');
}

export default function HighrateTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-official" />;
}
