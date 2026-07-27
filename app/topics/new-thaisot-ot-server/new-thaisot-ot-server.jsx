import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-ot-server');
}

export default function NewThaisotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-ot-server" />;
}
