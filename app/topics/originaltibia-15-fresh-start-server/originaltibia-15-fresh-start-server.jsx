import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-fresh-start-server');
}

export default function Originaltibia15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-fresh-start-server" />;
}
