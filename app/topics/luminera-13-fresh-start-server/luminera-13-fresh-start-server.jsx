import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-fresh-start-server');
}

export default function Luminera13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-fresh-start-server" />;
}
