import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibianus-server');
}

export default function PvpTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibianus-server" />;
}
