import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-fresh-start-server');
}

export default function Originaltibia11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-fresh-start-server" />;
}
