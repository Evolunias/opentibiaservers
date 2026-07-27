import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-register');
}

export default function PopularCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-register" />;
}
