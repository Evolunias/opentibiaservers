import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-zunera-ot-website');
}

export default function OldSchoolZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-zunera-ot-website" />;
}
