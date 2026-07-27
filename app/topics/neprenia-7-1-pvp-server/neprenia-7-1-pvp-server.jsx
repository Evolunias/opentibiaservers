import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-pvp-server');
}

export default function Neprenia71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-pvp-server" />;
}
