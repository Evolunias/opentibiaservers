import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-pvp-server');
}

export default function Luminera80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-pvp-server" />;
}
