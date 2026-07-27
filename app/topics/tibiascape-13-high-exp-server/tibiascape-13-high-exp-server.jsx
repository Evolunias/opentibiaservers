import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-high-exp-server');
}

export default function Tibiascape13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-high-exp-server" />;
}
