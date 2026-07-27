import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-europe');
}

export default function EvoRegisterEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-register-europe" />;
}
