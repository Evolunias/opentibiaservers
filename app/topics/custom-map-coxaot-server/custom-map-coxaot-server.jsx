import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-coxaot-server');
}

export default function CustomMapCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-coxaot-server" />;
}
