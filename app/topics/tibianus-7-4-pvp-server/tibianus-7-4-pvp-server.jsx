import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-pvp-server');
}

export default function Tibianus74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-pvp-server" />;
}
