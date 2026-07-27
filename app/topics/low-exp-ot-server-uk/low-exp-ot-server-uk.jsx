import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ot-server-uk');
}

export default function LowExpOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ot-server-uk" />;
}
