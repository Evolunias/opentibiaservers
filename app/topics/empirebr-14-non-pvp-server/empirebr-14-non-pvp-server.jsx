import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-non-pvp-server');
}

export default function Empirebr14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-non-pvp-server" />;
}
