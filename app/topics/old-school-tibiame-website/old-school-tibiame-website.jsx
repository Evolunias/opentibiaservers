import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiame-website');
}

export default function OldSchoolTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiame-website" />;
}
