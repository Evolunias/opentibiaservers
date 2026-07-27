import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-germany');
}

export default function OlderaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-germany" />;
}
