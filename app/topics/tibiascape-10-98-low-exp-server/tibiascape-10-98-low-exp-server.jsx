import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-low-exp-server');
}

export default function Tibiascape1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-low-exp-server" />;
}
