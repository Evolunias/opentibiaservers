import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-south-america');
}

export default function NtoStarNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-south-america" />;
}
