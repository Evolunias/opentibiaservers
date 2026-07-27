import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-pvp-server');
}

export default function Empirebr14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-pvp-server" />;
}
