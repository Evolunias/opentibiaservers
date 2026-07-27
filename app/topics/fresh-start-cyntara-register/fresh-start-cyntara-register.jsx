import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-register');
}

export default function FreshStartCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-register" />;
}
