import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-poland');
}

export default function OlderaFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-poland" />;
}
