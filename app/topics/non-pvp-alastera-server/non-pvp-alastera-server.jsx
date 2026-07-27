import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-alastera-server');
}

export default function NonPvpAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-alastera-server" />;
}
