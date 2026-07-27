import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-south-america');
}

export default function MidhemCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-south-america" />;
}
