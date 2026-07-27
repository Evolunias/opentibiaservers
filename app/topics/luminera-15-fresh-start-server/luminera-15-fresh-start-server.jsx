import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-fresh-start-server');
}

export default function Luminera15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-fresh-start-server" />;
}
