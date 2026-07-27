import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-pvp-server');
}

export default function Neprenia13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-pvp-server" />;
}
