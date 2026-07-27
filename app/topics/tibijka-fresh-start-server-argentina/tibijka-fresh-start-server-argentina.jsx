import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-argentina');
}

export default function TibijkaFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-argentina" />;
}
