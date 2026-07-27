import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-pvp-server');
}

export default function Luminera854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-pvp-server" />;
}
