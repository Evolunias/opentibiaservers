import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-low-exp-server');
}

export default function Tibiaorigins15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-low-exp-server" />;
}
