import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-south-america');
}

export default function OxygenotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-south-america" />;
}
