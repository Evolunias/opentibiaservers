import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-fresh-start-server-poland');
}

export default function MistOfDeathFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-fresh-start-server-poland" />;
}
