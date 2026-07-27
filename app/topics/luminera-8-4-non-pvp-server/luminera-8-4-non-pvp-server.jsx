import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-non-pvp-server');
}

export default function Luminera84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-non-pvp-server" />;
}
