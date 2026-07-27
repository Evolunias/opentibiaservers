import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-ot-server');
}

export default function KasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-ot-server" />;
}
