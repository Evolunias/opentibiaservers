import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-low-exp-server-uk');
}

export default function MistOfDeathLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-low-exp-server-uk" />;
}
