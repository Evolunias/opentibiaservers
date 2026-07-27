import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-evolera-server');
}

export default function PvpEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-evolera-server" />;
}
