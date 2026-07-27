import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-poland');
}

export default function NepreniaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-poland" />;
}
