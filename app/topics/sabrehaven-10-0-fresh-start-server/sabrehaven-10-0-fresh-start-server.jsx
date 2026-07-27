import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-fresh-start-server');
}

export default function Sabrehaven100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-fresh-start-server" />;
}
