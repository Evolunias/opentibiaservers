import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-fresh-start-server');
}

export default function Eldera81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-fresh-start-server" />;
}
