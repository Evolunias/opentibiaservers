import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-pvp-server');
}

export default function Luminera81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-pvp-server" />;
}
