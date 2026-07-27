import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-high-exp-server');
}

export default function Tibiaorigins76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-high-exp-server" />;
}
