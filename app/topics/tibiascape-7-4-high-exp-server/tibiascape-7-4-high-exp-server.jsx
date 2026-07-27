import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-high-exp-server');
}

export default function Tibiascape74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-high-exp-server" />;
}
