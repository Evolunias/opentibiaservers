import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-germany');
}

export default function MistOfDeathRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-germany" />;
}
