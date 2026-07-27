import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-europe');
}

export default function HighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-europe" />;
}
