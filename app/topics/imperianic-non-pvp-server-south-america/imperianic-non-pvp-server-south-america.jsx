import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-south-america');
}

export default function ImperianicNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-south-america" />;
}
