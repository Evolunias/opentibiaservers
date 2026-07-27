import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-uk');
}

export default function HighExpServersUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-uk" />;
}
