import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-register');
}

export default function LowrateThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-register" />;
}
