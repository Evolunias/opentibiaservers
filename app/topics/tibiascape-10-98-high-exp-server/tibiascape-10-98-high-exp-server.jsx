import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-98-high-exp-server');
}

export default function Tibiascape1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-98-high-exp-server" />;
}
