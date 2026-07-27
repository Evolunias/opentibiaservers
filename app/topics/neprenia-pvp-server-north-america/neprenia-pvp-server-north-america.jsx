import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-north-america');
}

export default function NepreniaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-north-america" />;
}
