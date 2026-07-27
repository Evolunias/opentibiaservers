import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-europe');
}

export default function HighExpServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-europe" />;
}
