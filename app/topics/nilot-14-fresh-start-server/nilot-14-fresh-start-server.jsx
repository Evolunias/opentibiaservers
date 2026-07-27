import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-fresh-start-server');
}

export default function Nilot14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-fresh-start-server" />;
}
