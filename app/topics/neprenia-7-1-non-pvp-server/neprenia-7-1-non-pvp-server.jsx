import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-1-non-pvp-server');
}

export default function Neprenia71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-1-non-pvp-server" />;
}
