import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-ot-server');
}

export default function PopularThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-ot-server" />;
}
