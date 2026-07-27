import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-players-online-france');
}

export default function NoResetPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-players-online-france" />;
}
