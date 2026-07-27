import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-register');
}

export default function LowrateKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-register" />;
}
