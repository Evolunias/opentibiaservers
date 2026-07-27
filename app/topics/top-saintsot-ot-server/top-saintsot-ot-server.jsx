import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-ot-server');
}

export default function TopSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-ot-server" />;
}
