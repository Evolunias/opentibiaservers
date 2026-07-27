import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-fresh-start-server-north-america');
}

export default function RealeraFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-fresh-start-server-north-america" />;
}
