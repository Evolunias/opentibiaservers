import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-fresh-start-server');
}

export default function Nilot100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-fresh-start-server" />;
}
