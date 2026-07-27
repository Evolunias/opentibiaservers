import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-ot-server');
}

export default function FreshStartThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-ot-server" />;
}
