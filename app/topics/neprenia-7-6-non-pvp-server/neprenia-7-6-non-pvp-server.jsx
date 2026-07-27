import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-non-pvp-server');
}

export default function Neprenia76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-non-pvp-server" />;
}
