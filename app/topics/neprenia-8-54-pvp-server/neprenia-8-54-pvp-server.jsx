import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-54-pvp-server');
}

export default function Neprenia854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-54-pvp-server" />;
}
