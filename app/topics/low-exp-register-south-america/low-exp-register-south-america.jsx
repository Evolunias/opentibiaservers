import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-register-south-america');
}

export default function LowExpRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-register-south-america" />;
}
