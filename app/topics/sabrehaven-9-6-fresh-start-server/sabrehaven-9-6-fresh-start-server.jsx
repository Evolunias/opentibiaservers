import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-fresh-start-server');
}

export default function Sabrehaven96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-fresh-start-server" />;
}
