import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-north-america');
}

export default function OlderaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-north-america" />;
}
