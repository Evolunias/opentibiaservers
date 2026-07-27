import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-fresh-start-server');
}

export default function Luminera11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-fresh-start-server" />;
}
