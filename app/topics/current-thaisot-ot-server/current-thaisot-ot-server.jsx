import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-ot-server');
}

export default function CurrentThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-ot-server" />;
}
