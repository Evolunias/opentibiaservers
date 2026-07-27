import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-high-exp-server');
}

export default function MistOfDeath100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-high-exp-server" />;
}
