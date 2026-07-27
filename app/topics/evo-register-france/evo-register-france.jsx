import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-france');
}

export default function EvoRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-register-france" />;
}
