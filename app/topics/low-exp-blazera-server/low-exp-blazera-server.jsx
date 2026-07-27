import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-blazera-server');
}

export default function LowExpBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-blazera-server" />;
}
