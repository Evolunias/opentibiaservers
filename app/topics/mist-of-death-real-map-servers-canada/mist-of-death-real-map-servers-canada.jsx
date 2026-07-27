import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-canada');
}

export default function MistOfDeathRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-canada" />;
}
