import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-pvp-server');
}

export default function Empirebr80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-pvp-server" />;
}
