import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-ot-server');
}

export default function TopNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-ot-server" />;
}
