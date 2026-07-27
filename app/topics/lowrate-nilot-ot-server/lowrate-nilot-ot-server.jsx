import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-ot-server');
}

export default function LowrateNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-ot-server" />;
}
