import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-register');
}

export default function NewCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-register" />;
}
