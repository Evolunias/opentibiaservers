import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-germany');
}

export default function LumineraFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-germany" />;
}
