import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-9-6-low-exp-server');
}

export default function Tibiaorigins96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-9-6-low-exp-server" />;
}
