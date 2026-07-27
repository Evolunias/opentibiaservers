import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-low-exp-server');
}

export default function Tibiascape11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-low-exp-server" />;
}
