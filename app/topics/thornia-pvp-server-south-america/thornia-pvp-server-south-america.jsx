import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-south-america');
}

export default function ThorniaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-south-america" />;
}
