import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-low-exp-server');
}

export default function MistOfDeath14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-low-exp-server" />;
}
