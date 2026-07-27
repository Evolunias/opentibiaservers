import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-non-pvp-server');
}

export default function Empirebr76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-non-pvp-server" />;
}
