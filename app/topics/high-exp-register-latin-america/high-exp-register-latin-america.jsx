import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-latin-america');
}

export default function HighExpRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-latin-america" />;
}
