import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-fresh-start-server');
}

export default function Originaltibia14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-fresh-start-server" />;
}
