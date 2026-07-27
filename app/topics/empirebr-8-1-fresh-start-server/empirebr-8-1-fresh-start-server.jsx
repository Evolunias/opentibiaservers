import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-fresh-start-server');
}

export default function Empirebr81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-fresh-start-server" />;
}
