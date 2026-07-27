import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-fresh-start-server');
}

export default function Originaltibia12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-fresh-start-server" />;
}
