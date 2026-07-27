import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-ot-server');
}

export default function ActiveNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-ot-server" />;
}
