import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-argentina');
}

export default function SaintsotLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-argentina" />;
}
