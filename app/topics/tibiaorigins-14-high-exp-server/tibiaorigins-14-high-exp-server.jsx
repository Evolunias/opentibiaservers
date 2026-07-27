import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-14-high-exp-server');
}

export default function Tibiaorigins14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-14-high-exp-server" />;
}
