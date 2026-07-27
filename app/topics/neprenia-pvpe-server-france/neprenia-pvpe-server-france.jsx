import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-france');
}

export default function NepreniaPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-france" />;
}
