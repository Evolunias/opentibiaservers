import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-non-pvp-server');
}

export default function Neprenia100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-non-pvp-server" />;
}
