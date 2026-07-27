import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-cyntara-server');
}

export default function LowExpCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-cyntara-server" />;
}
