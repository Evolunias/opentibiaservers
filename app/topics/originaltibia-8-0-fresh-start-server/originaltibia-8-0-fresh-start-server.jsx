import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-fresh-start-server');
}

export default function Originaltibia80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-fresh-start-server" />;
}
