import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-low-exp-server');
}

export default function Tibiascape14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-low-exp-server" />;
}
