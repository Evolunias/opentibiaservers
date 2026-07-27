import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-players-online-france');
}

export default function HighExpPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-players-online-france" />;
}
