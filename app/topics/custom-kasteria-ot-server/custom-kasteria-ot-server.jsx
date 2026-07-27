import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-ot-server');
}

export default function CustomKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-ot-server" />;
}
