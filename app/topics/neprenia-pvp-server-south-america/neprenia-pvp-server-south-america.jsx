import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-south-america');
}

export default function NepreniaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-south-america" />;
}
