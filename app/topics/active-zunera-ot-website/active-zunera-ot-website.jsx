import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-website');
}

export default function ActiveZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-website" />;
}
