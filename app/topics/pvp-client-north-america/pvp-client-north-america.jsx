import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-client-north-america');
}

export default function PvpClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-client-north-america" />;
}
