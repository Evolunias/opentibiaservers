import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-fresh-start-server');
}

export default function Empirebr96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-fresh-start-server" />;
}
