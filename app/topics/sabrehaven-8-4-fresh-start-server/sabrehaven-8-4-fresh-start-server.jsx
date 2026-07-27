import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-fresh-start-server');
}

export default function Sabrehaven84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-fresh-start-server" />;
}
