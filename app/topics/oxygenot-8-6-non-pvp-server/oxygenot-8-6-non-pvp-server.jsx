import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-non-pvp-server');
}

export default function Oxygenot86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-non-pvp-server" />;
}
