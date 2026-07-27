import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-pvpe-server');
}

export default function Neprenia15PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-pvpe-server" />;
}
