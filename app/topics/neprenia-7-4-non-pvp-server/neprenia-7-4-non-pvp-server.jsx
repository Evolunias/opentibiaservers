import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-non-pvp-server');
}

export default function Neprenia74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-non-pvp-server" />;
}
