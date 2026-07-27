import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-register');
}

export default function LowrateCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-register" />;
}
