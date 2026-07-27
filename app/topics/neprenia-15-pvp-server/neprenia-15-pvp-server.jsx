import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-pvp-server');
}

export default function Neprenia15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-pvp-server" />;
}
