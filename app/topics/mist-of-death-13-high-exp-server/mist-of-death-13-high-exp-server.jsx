import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-high-exp-server');
}

export default function MistOfDeath13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-high-exp-server" />;
}
