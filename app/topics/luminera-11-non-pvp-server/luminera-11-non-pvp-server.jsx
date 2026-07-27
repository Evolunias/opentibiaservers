import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-non-pvp-server');
}

export default function Luminera11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-non-pvp-server" />;
}
