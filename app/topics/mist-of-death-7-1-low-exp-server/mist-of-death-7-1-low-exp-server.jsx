import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-1-low-exp-server');
}

export default function MistOfDeath71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-1-low-exp-server" />;
}
