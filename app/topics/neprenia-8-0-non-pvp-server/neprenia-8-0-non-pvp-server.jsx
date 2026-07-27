import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-0-non-pvp-server');
}

export default function Neprenia80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-0-non-pvp-server" />;
}
