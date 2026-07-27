import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-pvp-server');
}

export default function Tibianus80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-pvp-server" />;
}
