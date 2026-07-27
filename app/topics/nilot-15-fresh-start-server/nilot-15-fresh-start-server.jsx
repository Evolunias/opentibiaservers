import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-fresh-start-server');
}

export default function Nilot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-fresh-start-server" />;
}
