import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-13-high-exp-server');
}

export default function Tibiaorigins13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-13-high-exp-server" />;
}
