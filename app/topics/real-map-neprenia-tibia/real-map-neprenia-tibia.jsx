import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-tibia');
}

export default function RealMapNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-tibia" />;
}
