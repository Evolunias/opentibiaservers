import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-pvp-server');
}

export default function Empirebr96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-pvp-server" />;
}
