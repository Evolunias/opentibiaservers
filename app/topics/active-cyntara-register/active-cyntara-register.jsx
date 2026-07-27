import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-register');
}

export default function ActiveCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-register" />;
}
