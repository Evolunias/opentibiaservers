import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-0-high-exp-server');
}

export default function Tibiaorigins80HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-0-high-exp-server" />;
}
