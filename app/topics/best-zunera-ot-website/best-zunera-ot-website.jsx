import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-website');
}

export default function BestZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-website" />;
}
