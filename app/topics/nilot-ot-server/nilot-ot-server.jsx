import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-ot-server');
}

export default function NilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-ot-server" />;
}
