import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-fresh-start-server');
}

export default function Empirebr12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-fresh-start-server" />;
}
