import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-non-pvp-server');
}

export default function Empirebr100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-non-pvp-server" />;
}
