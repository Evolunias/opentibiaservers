import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-canada');
}

export default function NepreniaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-canada" />;
}
