import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-13-low-exp-server');
}

export default function Tibiascape13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-13-low-exp-server" />;
}
