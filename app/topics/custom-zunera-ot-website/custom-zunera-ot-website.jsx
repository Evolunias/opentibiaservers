import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-website');
}

export default function CustomZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-website" />;
}
