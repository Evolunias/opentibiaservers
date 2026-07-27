import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-server-germany');
}

export default function MistOfDeathRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-server-germany" />;
}
