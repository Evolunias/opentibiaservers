import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-9-6-non-pvp-server');
}

export default function Neprenia96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-9-6-non-pvp-server" />;
}
