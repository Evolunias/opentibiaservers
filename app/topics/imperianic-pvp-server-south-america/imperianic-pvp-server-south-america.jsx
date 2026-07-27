import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-south-america');
}

export default function ImperianicPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-south-america" />;
}
