import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-fresh-start-server');
}

export default function Empirebr76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-fresh-start-server" />;
}
