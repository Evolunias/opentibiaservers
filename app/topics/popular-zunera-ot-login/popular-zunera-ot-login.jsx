import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-login');
}

export default function PopularZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-login" />;
}
