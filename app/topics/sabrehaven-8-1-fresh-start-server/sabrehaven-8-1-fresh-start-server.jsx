import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-fresh-start-server');
}

export default function Sabrehaven81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-fresh-start-server" />;
}
