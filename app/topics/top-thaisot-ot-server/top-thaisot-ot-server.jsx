import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-ot-server');
}

export default function TopThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-ot-server" />;
}
