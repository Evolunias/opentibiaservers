import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-fresh-start-server');
}

export default function Luminera76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-fresh-start-server" />;
}
