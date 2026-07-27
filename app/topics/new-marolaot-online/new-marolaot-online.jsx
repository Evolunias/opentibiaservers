import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-online');
}

export default function NewMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-online" />;
}
