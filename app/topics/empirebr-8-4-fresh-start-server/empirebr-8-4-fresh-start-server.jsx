import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-fresh-start-server');
}

export default function Empirebr84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-fresh-start-server" />;
}
