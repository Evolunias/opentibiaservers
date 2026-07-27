import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-non-pvp-server');
}

export default function Luminera96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-non-pvp-server" />;
}
