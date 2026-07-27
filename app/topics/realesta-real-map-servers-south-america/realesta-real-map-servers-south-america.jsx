import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-servers-south-america');
}

export default function RealestaRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-servers-south-america" />;
}
