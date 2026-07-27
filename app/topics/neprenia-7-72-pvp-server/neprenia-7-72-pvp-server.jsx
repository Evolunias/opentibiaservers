import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-pvp-server');
}

export default function Neprenia772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-pvp-server" />;
}
