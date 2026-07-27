import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-alastera-server');
}

export default function PvpAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-alastera-server" />;
}
