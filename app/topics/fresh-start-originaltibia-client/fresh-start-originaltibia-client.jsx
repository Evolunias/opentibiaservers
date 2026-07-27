import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-client');
}

export default function FreshStartOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-client" />;
}
