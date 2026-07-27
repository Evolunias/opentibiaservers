import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-high-exp-server');
}

export default function Tibiascape15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-high-exp-server" />;
}
