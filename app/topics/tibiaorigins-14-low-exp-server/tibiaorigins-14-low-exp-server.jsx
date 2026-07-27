import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-low-exp-server');
}

export default function Tibiaorigins14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-low-exp-server" />;
}
