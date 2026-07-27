import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-pvp-server');
}

export default function Luminera15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-pvp-server" />;
}
