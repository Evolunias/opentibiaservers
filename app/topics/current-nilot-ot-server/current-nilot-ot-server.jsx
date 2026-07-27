import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-ot-server');
}

export default function CurrentNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-ot-server" />;
}
