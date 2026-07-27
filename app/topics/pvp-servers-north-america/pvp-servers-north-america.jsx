import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-north-america');
}

export default function PvpServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-north-america" />;
}
