import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-pvp-server');
}

export default function Neprenia12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-pvp-server" />;
}
