import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-fresh-start-server-europe');
}

export default function MistOfDeathFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-fresh-start-server-europe" />;
}
