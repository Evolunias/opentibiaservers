import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-high-exp-server');
}

export default function Tibiascape96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-high-exp-server" />;
}
