import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-fresh-start-server');
}

export default function Sabrehaven74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-fresh-start-server" />;
}
