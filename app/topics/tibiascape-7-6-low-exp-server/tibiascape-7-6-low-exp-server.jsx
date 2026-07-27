import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-low-exp-server');
}

export default function Tibiascape76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-low-exp-server" />;
}
