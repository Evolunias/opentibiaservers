import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-fresh-start-server');
}

export default function Sabrehaven12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-fresh-start-server" />;
}
