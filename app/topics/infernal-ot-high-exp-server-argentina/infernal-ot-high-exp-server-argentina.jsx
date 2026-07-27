import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp-server-argentina');
}

export default function InfernalOtHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp-server-argentina" />;
}
