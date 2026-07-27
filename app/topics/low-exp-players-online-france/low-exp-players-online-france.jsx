import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-players-online-france');
}

export default function LowExpPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="low-exp-players-online-france" />;
}
