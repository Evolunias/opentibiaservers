import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-south-america');
}

export default function MidhemCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-south-america" />;
}
