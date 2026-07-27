import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-fresh-start-server');
}

export default function Luminera12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-fresh-start-server" />;
}
