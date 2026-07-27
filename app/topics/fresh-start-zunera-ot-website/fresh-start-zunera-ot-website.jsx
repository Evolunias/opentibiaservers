import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-website');
}

export default function FreshStartZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-website" />;
}
