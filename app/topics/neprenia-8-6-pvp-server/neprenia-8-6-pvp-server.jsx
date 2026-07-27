import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-pvp-server');
}

export default function Neprenia86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-pvp-server" />;
}
