import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-north-america');
}

export default function HighExpRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-north-america" />;
}
