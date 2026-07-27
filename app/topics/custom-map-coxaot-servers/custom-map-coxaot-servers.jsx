import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-coxaot-servers');
}

export default function CustomMapCoxaotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-coxaot-servers" />;
}
