import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-poland');
}

export default function MistOfDeathLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-poland" />;
}
