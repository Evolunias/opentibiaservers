import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-fresh-start-server');
}

export default function Sabrehaven71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-fresh-start-server" />;
}
