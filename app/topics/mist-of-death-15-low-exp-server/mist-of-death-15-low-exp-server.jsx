import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-low-exp-server');
}

export default function MistOfDeath15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-low-exp-server" />;
}
