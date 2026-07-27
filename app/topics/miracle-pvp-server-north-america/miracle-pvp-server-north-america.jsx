import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-server-north-america');
}

export default function MiraclePvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-server-north-america" />;
}
