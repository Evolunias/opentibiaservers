import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-low-exp-server');
}

export default function MistOfDeath13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-low-exp-server" />;
}
