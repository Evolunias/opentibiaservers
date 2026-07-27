import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-fresh-start-server-germany');
}

export default function MistOfDeathFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-fresh-start-server-germany" />;
}
