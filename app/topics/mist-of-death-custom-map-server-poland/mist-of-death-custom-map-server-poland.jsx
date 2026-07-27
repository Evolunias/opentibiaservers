import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-server-poland');
}

export default function MistOfDeathCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-server-poland" />;
}
