import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-4-low-exp-server');
}

export default function MistOfDeath74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-4-low-exp-server" />;
}
