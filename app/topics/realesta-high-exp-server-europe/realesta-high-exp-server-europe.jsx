import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-europe');
}

export default function RealestaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-europe" />;
}
