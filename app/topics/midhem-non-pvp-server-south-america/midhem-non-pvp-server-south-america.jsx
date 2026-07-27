import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-non-pvp-server-south-america');
}

export default function MidhemNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-non-pvp-server-south-america" />;
}
