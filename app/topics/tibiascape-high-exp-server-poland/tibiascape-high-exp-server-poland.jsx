import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-poland');
}

export default function TibiascapeHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-poland" />;
}
