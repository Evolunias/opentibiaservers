import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-register');
}

export default function TopCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-register" />;
}
