import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-servers-poland');
}

export default function UnlineRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-servers-poland" />;
}
