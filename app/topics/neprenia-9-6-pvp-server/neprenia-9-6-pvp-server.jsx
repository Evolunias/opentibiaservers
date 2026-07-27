import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-pvp-server');
}

export default function Neprenia96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-pvp-server" />;
}
