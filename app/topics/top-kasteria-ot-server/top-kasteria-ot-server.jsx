import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-ot-server');
}

export default function TopKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-ot-server" />;
}
