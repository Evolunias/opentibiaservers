import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-pvp-server');
}

export default function Neprenia11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-pvp-server" />;
}
