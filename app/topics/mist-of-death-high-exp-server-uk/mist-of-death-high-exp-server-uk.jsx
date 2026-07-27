import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-high-exp-server-uk');
}

export default function MistOfDeathHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-high-exp-server-uk" />;
}
