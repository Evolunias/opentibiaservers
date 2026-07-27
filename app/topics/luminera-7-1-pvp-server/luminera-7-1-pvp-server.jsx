import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-pvp-server');
}

export default function Luminera71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-pvp-server" />;
}
