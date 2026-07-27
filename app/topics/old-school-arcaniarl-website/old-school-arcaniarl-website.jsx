import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-arcaniarl-website');
}

export default function OldSchoolArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-arcaniarl-website" />;
}
