import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-north-america');
}

export default function OxygenotNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-north-america" />;
}
