import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-evolera-server');
}

export default function NonPvpEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-evolera-server" />;
}
