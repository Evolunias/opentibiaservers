import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-north-america');
}

export default function TibiantisPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-north-america" />;
}
