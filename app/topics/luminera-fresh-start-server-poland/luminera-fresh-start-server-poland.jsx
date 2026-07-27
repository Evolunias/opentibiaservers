import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-poland');
}

export default function LumineraFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-poland" />;
}
