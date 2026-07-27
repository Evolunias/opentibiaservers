import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-custom-map-servers-poland');
}

export default function UnlineCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-custom-map-servers-poland" />;
}
