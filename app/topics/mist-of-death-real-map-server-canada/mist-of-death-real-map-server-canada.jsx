import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-server-canada');
}

export default function MistOfDeathRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-server-canada" />;
}
