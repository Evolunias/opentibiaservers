import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-fresh-start-server');
}

export default function Eldera854FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-fresh-start-server" />;
}
