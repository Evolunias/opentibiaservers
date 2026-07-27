import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-real-map-servers-poland');
}

export default function MistOfDeathRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-real-map-servers-poland" />;
}
