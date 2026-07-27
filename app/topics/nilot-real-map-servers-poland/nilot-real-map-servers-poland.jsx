import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-poland');
}

export default function NilotRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-poland" />;
}
