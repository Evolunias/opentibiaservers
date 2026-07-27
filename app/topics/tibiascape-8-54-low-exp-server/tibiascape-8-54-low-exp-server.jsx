import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-54-low-exp-server');
}

export default function Tibiascape854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-54-low-exp-server" />;
}
