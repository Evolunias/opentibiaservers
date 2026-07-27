import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-54-non-pvp-server');
}

export default function Luminera854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-54-non-pvp-server" />;
}
