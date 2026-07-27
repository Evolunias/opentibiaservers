import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-ot-server');
}

export default function PopularHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-ot-server" />;
}
