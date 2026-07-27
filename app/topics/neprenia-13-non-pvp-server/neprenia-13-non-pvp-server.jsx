import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-13-non-pvp-server');
}

export default function Neprenia13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-13-non-pvp-server" />;
}
