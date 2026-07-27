import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-12-non-pvp-server');
}

export default function Neprenia12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-12-non-pvp-server" />;
}
