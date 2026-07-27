import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-server');
}

export default function PopularZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-server" />;
}
