import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-72-high-exp-server');
}

export default function MistOfDeath772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-72-high-exp-server" />;
}
