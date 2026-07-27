import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-north-america');
}

export default function LumineraFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-north-america" />;
}
