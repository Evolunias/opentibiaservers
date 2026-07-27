import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-custom-map-servers-poland');
}

export default function MistOfDeathCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-custom-map-servers-poland" />;
}
