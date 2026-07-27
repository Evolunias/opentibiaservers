import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-server-argentina');
}

export default function MistOfDeathRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-server-argentina" />;
}
