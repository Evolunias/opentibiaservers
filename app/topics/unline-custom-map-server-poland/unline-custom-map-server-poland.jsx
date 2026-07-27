import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-server-poland');
}

export default function UnlineCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-server-poland" />;
}
