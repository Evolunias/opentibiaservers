import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-server');
}

export default function FreshStartRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-server" />;
}
