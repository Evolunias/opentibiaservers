import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-pvp-server');
}

export default function Neprenia14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-pvp-server" />;
}
