import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-north-america');
}

export default function LowExpRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-north-america" />;
}
