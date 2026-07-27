import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-europe');
}

export default function LumineraFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-europe" />;
}
