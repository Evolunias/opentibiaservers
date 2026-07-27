import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-poland');
}

export default function RealeraFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-poland" />;
}
