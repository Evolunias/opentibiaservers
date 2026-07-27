import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-pvp-server');
}

export default function Empirebr76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-pvp-server" />;
}
