import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-high-exp-server');
}

export default function Tibiascape11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-high-exp-server" />;
}
