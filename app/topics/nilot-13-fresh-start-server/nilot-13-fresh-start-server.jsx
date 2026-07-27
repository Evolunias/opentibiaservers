import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-fresh-start-server');
}

export default function Nilot13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-fresh-start-server" />;
}
