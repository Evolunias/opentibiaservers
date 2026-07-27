import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-fresh-start-server');
}

export default function Empirebr11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-fresh-start-server" />;
}
