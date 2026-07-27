import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-uk');
}

export default function LowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-uk" />;
}
