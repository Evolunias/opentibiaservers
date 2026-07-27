import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-fresh-start-server');
}

export default function Originaltibia74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-fresh-start-server" />;
}
