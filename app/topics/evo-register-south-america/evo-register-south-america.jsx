import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-south-america');
}

export default function EvoRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-register-south-america" />;
}
