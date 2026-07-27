import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-private-server');
}

export default function PopularHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-private-server" />;
}
