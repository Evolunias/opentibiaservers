import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-4-high-exp-server');
}

export default function Tibiascape84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-4-high-exp-server" />;
}
