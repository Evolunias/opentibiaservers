import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-1-fresh-start-server');
}

export default function Thaisot81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-1-fresh-start-server" />;
}
