import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-custom-map-servers-south-america');
}

export default function ShadowcoresCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-custom-map-servers-south-america" />;
}
