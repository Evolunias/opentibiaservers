import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-europe');
}

export default function TibiantisHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-europe" />;
}
