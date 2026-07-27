import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-ot-server');
}

export default function CurrentAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-ot-server" />;
}
