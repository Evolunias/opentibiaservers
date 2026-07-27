import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-fresh-start-server-uk');
}

export default function MistOfDeathFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-fresh-start-server-uk" />;
}
