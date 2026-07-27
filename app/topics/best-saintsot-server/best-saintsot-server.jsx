import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-server');
}

export default function BestSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-server" />;
}
