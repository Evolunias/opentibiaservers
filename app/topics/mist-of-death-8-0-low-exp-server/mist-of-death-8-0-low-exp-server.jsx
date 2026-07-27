import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-0-low-exp-server');
}

export default function MistOfDeath80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-0-low-exp-server" />;
}
