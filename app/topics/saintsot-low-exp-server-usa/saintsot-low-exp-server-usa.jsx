import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-usa');
}

export default function SaintsotLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-usa" />;
}
