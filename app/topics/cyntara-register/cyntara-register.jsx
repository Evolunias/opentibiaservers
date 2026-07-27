import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-register');
}

export default function CyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="cyntara-register" />;
}
