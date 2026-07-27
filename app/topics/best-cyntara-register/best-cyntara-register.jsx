import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-register');
}

export default function BestCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-register" />;
}
