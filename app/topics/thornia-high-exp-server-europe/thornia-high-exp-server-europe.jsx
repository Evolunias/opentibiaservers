import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-high-exp-server-europe');
}

export default function ThorniaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-high-exp-server-europe" />;
}
