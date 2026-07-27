import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-pvp-server');
}

export default function Luminera76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-pvp-server" />;
}
