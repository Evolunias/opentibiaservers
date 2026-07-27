import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-11-high-exp-server');
}

export default function MistOfDeath11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-11-high-exp-server" />;
}
