import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-midhem-servers');
}

export default function CustomMapMidhemServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-midhem-servers" />;
}
