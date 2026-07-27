import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-9-6-low-exp-server');
}

export default function MistOfDeath96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-9-6-low-exp-server" />;
}
