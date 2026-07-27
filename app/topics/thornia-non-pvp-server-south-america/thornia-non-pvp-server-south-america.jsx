import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-south-america');
}

export default function ThorniaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-south-america" />;
}
