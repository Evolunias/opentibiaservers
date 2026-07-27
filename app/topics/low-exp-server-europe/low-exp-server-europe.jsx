import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-europe');
}

export default function LowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-europe" />;
}
