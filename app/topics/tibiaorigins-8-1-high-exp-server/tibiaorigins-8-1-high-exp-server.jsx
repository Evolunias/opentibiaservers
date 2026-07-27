import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-high-exp-server');
}

export default function Tibiaorigins81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-high-exp-server" />;
}
