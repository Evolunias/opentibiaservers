import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-high-exp-server');
}

export default function Tibiascape76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-high-exp-server" />;
}
