import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-fresh-start-server');
}

export default function Sabrehaven15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-fresh-start-server" />;
}
