import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-11-low-exp-server');
}

export default function Tibiaorigins11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-11-low-exp-server" />;
}
