import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-thaisot-server');
}

export default function HighExpThaisotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-thaisot-server" />;
}
