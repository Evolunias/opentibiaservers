import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-pvp-server');
}

export default function Luminera86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-pvp-server" />;
}
