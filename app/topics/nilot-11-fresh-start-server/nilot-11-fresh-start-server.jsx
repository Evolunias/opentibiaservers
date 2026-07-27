import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-fresh-start-server');
}

export default function Nilot11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-fresh-start-server" />;
}
