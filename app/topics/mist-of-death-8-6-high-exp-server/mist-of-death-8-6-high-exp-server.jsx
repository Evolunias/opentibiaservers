import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-6-high-exp-server');
}

export default function MistOfDeath86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-6-high-exp-server" />;
}
