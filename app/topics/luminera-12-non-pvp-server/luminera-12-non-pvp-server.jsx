import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-non-pvp-server');
}

export default function Luminera12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-non-pvp-server" />;
}
