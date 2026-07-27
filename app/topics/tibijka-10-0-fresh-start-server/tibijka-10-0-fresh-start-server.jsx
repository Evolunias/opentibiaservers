import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-fresh-start-server');
}

export default function Tibijka100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-fresh-start-server" />;
}
