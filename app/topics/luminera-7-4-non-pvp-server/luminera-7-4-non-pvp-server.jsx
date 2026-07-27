import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-non-pvp-server');
}

export default function Luminera74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-non-pvp-server" />;
}
