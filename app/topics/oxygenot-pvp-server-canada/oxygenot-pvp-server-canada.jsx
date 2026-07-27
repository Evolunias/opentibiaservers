import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-canada');
}

export default function OxygenotPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-canada" />;
}
