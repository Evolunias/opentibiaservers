import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-pvp-server');
}

export default function Neprenia74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-pvp-server" />;
}
