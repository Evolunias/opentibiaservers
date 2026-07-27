import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-server-north-america');
}

export default function MistOfDeathRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-server-north-america" />;
}
