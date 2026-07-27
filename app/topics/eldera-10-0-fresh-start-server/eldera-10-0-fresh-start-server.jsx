import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-fresh-start-server');
}

export default function Eldera100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-fresh-start-server" />;
}
