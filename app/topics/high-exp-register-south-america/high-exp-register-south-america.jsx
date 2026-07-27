import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-register-south-america');
}

export default function HighExpRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-register-south-america" />;
}
