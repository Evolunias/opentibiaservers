import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-germany');
}

export default function MistOfDeathCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-germany" />;
}
