import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-6-high-exp-server');
}

export default function Tibiascape86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-6-high-exp-server" />;
}
