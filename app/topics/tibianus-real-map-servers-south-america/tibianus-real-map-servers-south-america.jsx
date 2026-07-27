import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-south-america');
}

export default function TibianusRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-south-america" />;
}
