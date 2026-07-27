import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-fresh-start-server');
}

export default function Thaisot100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-fresh-start-server" />;
}
