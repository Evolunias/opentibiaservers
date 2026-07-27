import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-pvp-server-south-america');
}

export default function MidhemPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-pvp-server-south-america" />;
}
