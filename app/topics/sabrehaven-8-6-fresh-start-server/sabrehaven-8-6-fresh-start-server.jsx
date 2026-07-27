import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-fresh-start-server');
}

export default function Sabrehaven86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-fresh-start-server" />;
}
