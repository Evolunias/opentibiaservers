import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-uk');
}

export default function LumineraFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-uk" />;
}
