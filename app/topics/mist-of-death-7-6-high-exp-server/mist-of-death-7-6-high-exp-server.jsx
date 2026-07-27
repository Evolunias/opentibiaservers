import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-6-high-exp-server');
}

export default function MistOfDeath76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-6-high-exp-server" />;
}
