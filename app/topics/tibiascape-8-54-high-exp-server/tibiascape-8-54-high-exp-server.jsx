import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-high-exp-server');
}

export default function Tibiascape854HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-high-exp-server" />;
}
