import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-online');
}

export default function CustomMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-online" />;
}
