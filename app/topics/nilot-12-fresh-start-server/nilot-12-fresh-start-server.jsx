import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-fresh-start-server');
}

export default function Nilot12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-fresh-start-server" />;
}
