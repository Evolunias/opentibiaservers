import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-fresh-start-server');
}

export default function Empirebr13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-fresh-start-server" />;
}
