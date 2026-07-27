import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-canada');
}

export default function EvoRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-register-canada" />;
}
