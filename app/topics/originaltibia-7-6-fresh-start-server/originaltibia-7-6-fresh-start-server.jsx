import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-fresh-start-server');
}

export default function Originaltibia76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-fresh-start-server" />;
}
