import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-11-non-pvp-server');
}

export default function Neprenia11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-11-non-pvp-server" />;
}
