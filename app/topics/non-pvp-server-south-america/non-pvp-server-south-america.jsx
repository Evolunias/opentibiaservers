import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-south-america');
}

export default function NonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-south-america" />;
}
