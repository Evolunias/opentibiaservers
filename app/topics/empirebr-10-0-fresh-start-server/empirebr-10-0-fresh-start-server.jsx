import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-fresh-start-server');
}

export default function Empirebr100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-fresh-start-server" />;
}
