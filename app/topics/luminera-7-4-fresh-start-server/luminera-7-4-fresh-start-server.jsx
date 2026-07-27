import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-fresh-start-server');
}

export default function Luminera74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-fresh-start-server" />;
}
