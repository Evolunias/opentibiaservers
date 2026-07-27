import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-latin-america');
}

export default function LowExpRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-latin-america" />;
}
