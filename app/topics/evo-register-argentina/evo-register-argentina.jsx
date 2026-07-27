import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-argentina');
}

export default function EvoRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-register-argentina" />;
}
