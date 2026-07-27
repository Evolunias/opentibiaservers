import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-pvp-server');
}

export default function Luminera96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-pvp-server" />;
}
