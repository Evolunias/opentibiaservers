import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-argentina');
}

export default function LowExpOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-argentina" />;
}
