import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-europe');
}

export default function TibiascapeHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-europe" />;
}
