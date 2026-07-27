import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-south-america');
}

export default function NtoStarPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-south-america" />;
}
