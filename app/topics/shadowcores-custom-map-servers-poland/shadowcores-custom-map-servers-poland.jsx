import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-poland');
}

export default function ShadowcoresCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-poland" />;
}
