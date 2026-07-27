import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-poland');
}

export default function RealestaFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-poland" />;
}
