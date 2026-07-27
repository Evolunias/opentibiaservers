import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-servers-south-america');
}

export default function MidhemRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-servers-south-america" />;
}
