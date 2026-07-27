import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-south-america');
}

export default function ClassickDrakoriaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-south-america" />;
}
