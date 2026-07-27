import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-fresh-start-server');
}

export default function Eldera14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-fresh-start-server" />;
}
