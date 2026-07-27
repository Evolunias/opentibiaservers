import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-online');
}

export default function ActiveMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-online" />;
}
