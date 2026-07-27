import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-ot-server');
}

export default function SaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-ot-server" />;
}
