import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-argentina');
}

export default function SaintsotHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-argentina" />;
}
