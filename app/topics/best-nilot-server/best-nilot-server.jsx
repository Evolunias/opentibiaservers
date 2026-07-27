import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-server');
}

export default function BestNilotServerKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-server" />;
}
