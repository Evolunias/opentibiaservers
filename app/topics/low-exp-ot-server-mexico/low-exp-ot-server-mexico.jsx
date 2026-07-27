import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-mexico');
}

export default function LowExpOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-mexico" />;
}
