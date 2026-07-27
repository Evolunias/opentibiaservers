import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-pvp-server');
}

export default function Empirebr84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-pvp-server" />;
}
