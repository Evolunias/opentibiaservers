import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-72-high-exp-server');
}

export default function Tibiascape772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-72-high-exp-server" />;
}
