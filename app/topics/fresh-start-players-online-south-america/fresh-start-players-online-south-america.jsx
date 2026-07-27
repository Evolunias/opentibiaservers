import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-players-online-south-america');
}

export default function FreshStartPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-players-online-south-america" />;
}
