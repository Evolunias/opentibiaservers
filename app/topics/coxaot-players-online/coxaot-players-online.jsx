import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-players-online');
}

export default function CoxaotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="coxaot-players-online" />;
}
