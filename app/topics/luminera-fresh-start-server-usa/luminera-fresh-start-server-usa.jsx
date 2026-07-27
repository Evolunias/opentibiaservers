import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-usa');
}

export default function LumineraFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-usa" />;
}
