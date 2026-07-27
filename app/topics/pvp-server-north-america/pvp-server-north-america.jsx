import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-north-america');
}

export default function PvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-north-america" />;
}
