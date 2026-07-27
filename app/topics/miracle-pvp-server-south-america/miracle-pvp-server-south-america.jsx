import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-south-america');
}

export default function MiraclePvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-south-america" />;
}
