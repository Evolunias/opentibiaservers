import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-poland');
}

export default function MistOfDeathHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-poland" />;
}
