import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-non-pvp-server');
}

export default function Luminera15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-non-pvp-server" />;
}
