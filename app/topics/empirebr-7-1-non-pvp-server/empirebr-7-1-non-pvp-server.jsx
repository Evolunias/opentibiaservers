import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-non-pvp-server');
}

export default function Empirebr71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-non-pvp-server" />;
}
