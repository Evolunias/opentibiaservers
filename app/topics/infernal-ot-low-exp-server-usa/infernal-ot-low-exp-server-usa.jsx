import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-usa');
}

export default function InfernalOtLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-usa" />;
}
