import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-low-exp-server-europe');
}

export default function ThorniaLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-low-exp-server-europe" />;
}
