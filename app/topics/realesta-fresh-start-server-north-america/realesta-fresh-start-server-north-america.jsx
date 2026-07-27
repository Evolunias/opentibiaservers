import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-north-america');
}

export default function RealestaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-north-america" />;
}
