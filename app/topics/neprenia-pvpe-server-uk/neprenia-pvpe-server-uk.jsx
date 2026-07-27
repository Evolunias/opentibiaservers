import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-uk');
}

export default function NepreniaPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-uk" />;
}
