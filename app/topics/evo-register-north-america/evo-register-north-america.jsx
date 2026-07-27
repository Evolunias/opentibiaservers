import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-north-america');
}

export default function EvoRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-register-north-america" />;
}
