import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-brazil');
}

export default function LumineraFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-brazil" />;
}
