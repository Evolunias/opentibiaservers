import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-fresh-start-server-canada');
}

export default function LumineraFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-fresh-start-server-canada" />;
}
