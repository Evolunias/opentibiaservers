import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-15-low-exp-server');
}

export default function Tibiascape15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-15-low-exp-server" />;
}
