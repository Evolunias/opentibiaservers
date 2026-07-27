import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-low-exp-server');
}

export default function Tibiascape81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-low-exp-server" />;
}
