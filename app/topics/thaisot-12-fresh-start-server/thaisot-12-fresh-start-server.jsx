import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-fresh-start-server');
}

export default function Thaisot12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-fresh-start-server" />;
}
