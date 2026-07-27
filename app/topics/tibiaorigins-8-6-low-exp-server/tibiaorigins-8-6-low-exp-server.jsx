import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-6-low-exp-server');
}

export default function Tibiaorigins86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-6-low-exp-server" />;
}
