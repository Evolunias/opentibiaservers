import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-fresh-start-server');
}

export default function Empirebr71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-fresh-start-server" />;
}
