import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-cyntara-server');
}

export default function HighExpCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-cyntara-server" />;
}
