import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-ot-server');
}

export default function PopularZuneraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-ot-server" />;
}
