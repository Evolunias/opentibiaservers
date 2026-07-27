import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-pvp-server');
}

export default function Luminera772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-pvp-server" />;
}
