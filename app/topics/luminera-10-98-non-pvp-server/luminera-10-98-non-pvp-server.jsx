import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-non-pvp-server');
}

export default function Luminera1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-non-pvp-server" />;
}
