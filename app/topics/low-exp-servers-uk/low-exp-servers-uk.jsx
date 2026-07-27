import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-uk');
}

export default function LowExpServersUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-uk" />;
}
