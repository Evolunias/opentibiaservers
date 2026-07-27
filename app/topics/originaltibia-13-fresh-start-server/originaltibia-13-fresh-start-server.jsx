import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-fresh-start-server');
}

export default function Originaltibia13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-fresh-start-server" />;
}
