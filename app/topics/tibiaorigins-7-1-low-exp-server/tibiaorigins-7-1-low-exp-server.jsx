import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-1-low-exp-server');
}

export default function Tibiaorigins71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-1-low-exp-server" />;
}
