import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-non-pvp-server');
}

export default function Neprenia15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-non-pvp-server" />;
}
