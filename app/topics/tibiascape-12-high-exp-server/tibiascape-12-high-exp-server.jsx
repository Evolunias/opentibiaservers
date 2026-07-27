import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-high-exp-server');
}

export default function Tibiascape12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-high-exp-server" />;
}
