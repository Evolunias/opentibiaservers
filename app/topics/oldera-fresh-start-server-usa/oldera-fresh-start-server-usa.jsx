import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-usa');
}

export default function OlderaFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-usa" />;
}
