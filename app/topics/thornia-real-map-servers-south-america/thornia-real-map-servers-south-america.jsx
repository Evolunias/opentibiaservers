import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-south-america');
}

export default function ThorniaRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-south-america" />;
}
