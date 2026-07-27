import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-server');
}

export default function FreshStartOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-server" />;
}
