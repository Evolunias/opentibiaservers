import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-fresh-start-server');
}

export default function Empirebr15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-fresh-start-server" />;
}
