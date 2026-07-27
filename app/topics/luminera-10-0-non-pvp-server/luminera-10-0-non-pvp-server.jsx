import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-non-pvp-server');
}

export default function Luminera100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-non-pvp-server" />;
}
