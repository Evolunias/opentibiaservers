import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-ot-server');
}

export default function PopularSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-ot-server" />;
}
