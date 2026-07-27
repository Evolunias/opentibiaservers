import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-pvp-server');
}

export default function Luminera13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-pvp-server" />;
}
