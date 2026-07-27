import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-low-exp-server');
}

export default function Tibiascape100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-low-exp-server" />;
}
