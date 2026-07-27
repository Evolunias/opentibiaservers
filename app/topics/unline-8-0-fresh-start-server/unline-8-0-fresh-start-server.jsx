import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-0-fresh-start-server');
}

export default function Unline80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-0-fresh-start-server" />;
}
