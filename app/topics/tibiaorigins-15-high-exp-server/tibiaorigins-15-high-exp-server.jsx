import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-high-exp-server');
}

export default function Tibiaorigins15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-high-exp-server" />;
}
