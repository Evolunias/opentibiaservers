import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-usa');
}

export default function LowExpOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-usa" />;
}
