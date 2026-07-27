import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-0-fresh-start-server');
}

export default function Thaisot80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-0-fresh-start-server" />;
}
