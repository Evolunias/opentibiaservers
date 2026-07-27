import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-server-south-america');
}

export default function MistOfDeathRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-server-south-america" />;
}
