import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-blazera-server');
}

export default function HighExpBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-blazera-server" />;
}
