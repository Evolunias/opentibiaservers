import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-online');
}

export default function MarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="marolaot-online" />;
}
