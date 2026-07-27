import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-non-pvp-server');
}

export default function Luminera13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-non-pvp-server" />;
}
