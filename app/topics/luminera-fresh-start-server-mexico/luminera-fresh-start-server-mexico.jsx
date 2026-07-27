import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-mexico');
}

export default function LumineraFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-mexico" />;
}
