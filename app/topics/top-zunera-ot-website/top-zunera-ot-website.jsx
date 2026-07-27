import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-website');
}

export default function TopZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-website" />;
}
