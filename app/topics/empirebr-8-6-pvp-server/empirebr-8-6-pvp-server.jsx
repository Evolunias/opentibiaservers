import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-pvp-server');
}

export default function Empirebr86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-pvp-server" />;
}
