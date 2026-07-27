import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-uk');
}

export default function HighExpOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-uk" />;
}
