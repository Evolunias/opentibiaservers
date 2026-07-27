import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ruthless-chaos-website');
}

export default function OldSchoolRuthlessChaosWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-ruthless-chaos-website" />;
}
