import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-argentina');
}

export default function MistOfDeathRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-argentina" />;
}
