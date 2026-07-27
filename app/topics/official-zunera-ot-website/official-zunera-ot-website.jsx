import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-website');
}

export default function OfficialZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-website" />;
}
