import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-latin-america');
}

export default function EvoRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-register-latin-america" />;
}
