import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-argentina');
}

export default function InfernalOtLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-argentina" />;
}
