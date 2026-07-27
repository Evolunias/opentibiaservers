import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-south-america');
}

export default function NostaltherNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-south-america" />;
}
