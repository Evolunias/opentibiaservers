import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-fresh-start-server');
}

export default function Sabrehaven11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-fresh-start-server" />;
}
