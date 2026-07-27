import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-argentina');
}

export default function OlderaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-argentina" />;
}
