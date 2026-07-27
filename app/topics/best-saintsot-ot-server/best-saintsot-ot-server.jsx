import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-ot-server');
}

export default function BestSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-ot-server" />;
}
