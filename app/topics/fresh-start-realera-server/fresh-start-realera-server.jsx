import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-server');
}

export default function FreshStartRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-server" />;
}
