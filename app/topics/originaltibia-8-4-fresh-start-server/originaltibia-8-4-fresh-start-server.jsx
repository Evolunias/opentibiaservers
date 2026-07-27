import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-fresh-start-server');
}

export default function Originaltibia84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-fresh-start-server" />;
}
