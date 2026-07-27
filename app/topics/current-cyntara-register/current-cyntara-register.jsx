import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-register');
}

export default function CurrentCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-register" />;
}
