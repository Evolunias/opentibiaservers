import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-server-north-america');
}

export default function OxygenotPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-server-north-america" />;
}
