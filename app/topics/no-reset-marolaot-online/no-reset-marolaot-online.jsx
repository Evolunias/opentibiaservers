import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-online');
}

export default function NoResetMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-online" />;
}
