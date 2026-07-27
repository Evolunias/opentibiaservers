import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-south-america');
}

export default function SaintsotLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-south-america" />;
}
