import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-canada');
}

export default function OxygenotNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-canada" />;
}
