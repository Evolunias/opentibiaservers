import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-14-non-pvp-server');
}

export default function Neprenia14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-14-non-pvp-server" />;
}
