import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-uk');
}

export default function UnlineHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-uk" />;
}
