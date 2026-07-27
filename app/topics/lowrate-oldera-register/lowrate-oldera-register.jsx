import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-register');
}

export default function LowrateOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-register" />;
}
