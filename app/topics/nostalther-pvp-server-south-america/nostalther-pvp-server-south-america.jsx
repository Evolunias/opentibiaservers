import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-south-america');
}

export default function NostaltherPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-south-america" />;
}
