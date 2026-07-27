import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-ot-server');
}

export default function ThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-ot-server" />;
}
