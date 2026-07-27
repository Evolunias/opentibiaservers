import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-uk');
}

export default function HighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-uk" />;
}
