import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-europe');
}

export default function LowExpServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-europe" />;
}
