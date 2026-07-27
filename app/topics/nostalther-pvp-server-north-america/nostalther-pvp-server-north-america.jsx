import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-north-america');
}

export default function NostaltherPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-north-america" />;
}
