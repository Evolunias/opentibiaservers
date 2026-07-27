import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-fresh-start-server');
}

export default function Sabrehaven13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-fresh-start-server" />;
}
