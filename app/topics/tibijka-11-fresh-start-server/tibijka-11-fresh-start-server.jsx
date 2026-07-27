import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-fresh-start-server');
}

export default function Tibijka11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-fresh-start-server" />;
}
