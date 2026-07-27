import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-non-pvp-server');
}

export default function Luminera14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-non-pvp-server" />;
}
