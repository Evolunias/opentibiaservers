import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-6-fresh-start-server');
}

export default function Nilot86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-6-fresh-start-server" />;
}
