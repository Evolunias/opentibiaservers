import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-uk');
}

export default function RealestaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-uk" />;
}
