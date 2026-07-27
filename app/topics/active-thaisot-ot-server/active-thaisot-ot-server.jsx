import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-ot-server');
}

export default function ActiveThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-ot-server" />;
}
