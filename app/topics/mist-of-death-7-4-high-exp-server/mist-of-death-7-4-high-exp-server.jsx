import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-4-high-exp-server');
}

export default function MistOfDeath74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-4-high-exp-server" />;
}
