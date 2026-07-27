import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-usa');
}

export default function MistOfDeathRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-usa" />;
}
