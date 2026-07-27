import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-4-high-exp-server');
}

export default function Tibiaorigins84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-4-high-exp-server" />;
}
