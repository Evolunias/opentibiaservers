import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-fresh-start-server');
}

export default function Eldera96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-fresh-start-server" />;
}
