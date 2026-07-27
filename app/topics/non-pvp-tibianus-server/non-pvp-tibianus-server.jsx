import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-tibianus-server');
}

export default function NonPvpTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-tibianus-server" />;
}
