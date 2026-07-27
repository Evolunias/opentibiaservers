import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-pvp-server');
}

export default function Luminera12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-pvp-server" />;
}
