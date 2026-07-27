import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-fresh-start-server');
}

export default function Originaltibia86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-fresh-start-server" />;
}
