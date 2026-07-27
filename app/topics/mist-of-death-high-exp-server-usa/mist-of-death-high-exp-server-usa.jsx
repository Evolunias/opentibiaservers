import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-usa');
}

export default function MistOfDeathHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-usa" />;
}
