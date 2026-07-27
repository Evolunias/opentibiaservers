import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-website');
}

export default function PopularZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-website" />;
}
