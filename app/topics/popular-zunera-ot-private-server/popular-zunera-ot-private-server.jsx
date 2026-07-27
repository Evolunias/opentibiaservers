import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-private-server');
}

export default function PopularZuneraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-private-server" />;
}
