import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-europe');
}

export default function NepreniaPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-europe" />;
}
