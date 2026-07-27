import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-0-high-exp-server');
}

export default function Tibiascape80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-0-high-exp-server" />;
}
