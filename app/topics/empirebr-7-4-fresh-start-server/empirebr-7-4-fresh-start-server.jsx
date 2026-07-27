import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-fresh-start-server');
}

export default function Empirebr74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-fresh-start-server" />;
}
