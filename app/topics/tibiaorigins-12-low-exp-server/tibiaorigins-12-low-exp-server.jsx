import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-12-low-exp-server');
}

export default function Tibiaorigins12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-12-low-exp-server" />;
}
