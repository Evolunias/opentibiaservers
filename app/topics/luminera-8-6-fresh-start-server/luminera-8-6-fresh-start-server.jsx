import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-fresh-start-server');
}

export default function Luminera86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-fresh-start-server" />;
}
