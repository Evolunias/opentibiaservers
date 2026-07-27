import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-4-low-exp-server');
}

export default function Tibiaorigins74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-4-low-exp-server" />;
}
