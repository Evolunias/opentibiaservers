import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-non-pvp-server');
}

export default function Neprenia772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-non-pvp-server" />;
}
