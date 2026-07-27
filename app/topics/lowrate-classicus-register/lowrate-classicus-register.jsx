import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-register');
}

export default function LowrateClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-register" />;
}
