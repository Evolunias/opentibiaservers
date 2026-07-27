import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-ot-server');
}

export default function CurrentKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-ot-server" />;
}
