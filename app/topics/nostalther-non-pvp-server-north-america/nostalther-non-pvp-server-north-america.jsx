import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-north-america');
}

export default function NostaltherNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-north-america" />;
}
