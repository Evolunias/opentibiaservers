import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-pvp-server');
}

export default function Luminera14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-pvp-server" />;
}
