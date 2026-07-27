import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-high-exp-server-germany');
}

export default function TibiascapeHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-high-exp-server-germany" />;
}
