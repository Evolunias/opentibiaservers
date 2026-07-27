import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-fresh-start-server-north-america');
}

export default function OriginaltibiaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-fresh-start-server-north-america" />;
}
