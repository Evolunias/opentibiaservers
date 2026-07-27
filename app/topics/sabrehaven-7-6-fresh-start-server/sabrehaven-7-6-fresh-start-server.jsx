import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-fresh-start-server');
}

export default function Sabrehaven76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-fresh-start-server" />;
}
