import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-players-online-south-america');
}

export default function CustomMapPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-players-online-south-america" />;
}
